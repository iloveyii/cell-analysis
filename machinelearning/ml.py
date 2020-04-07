#!/usr/bin/env python3
import os
from pylab import *
import pandas as pd

from pandas.tools.plotting import table  # EDIT: see deprecation warnings below
import cytoflow as flow

# if your figures are too big or too small, you can scale them by changing matplotlib's DPI
import matplotlib

STATIC_DIR = os.path.realpath('/shared/static/')
SHARED_PLOT_DIR = os.path.realpath('/shared/plots/')
SHARED_RAW_DIR = os.path.realpath('/shared/raw/')

BIN_WIDTH = 100
CSV_FILE = 'fcs_file.csv'
FCS_FILE = 'RFP_Well_A3.fcs'
FCS_FILE_A4 = 'CFP_Well_A4.fcs'
ECOLI_FILE = 'ecoli.fcs'


class MachineLearning:
    def __init__(self):
        self.response = {}
        # Locate sample data included with this package
        print('Raw dir in init :', SHARED_RAW_DIR)
        fcs_file_path = os.path.join(SHARED_RAW_DIR, FCS_FILE)
        print('FCS File', fcs_file_path)
        fcs_file_a4_path = os.path.join(SHARED_RAW_DIR, FCS_FILE_A4)
        print('FCS File 4', fcs_file_a4_path)

        tube1 = flow.Tube(file=fcs_file_path,
                          conditions={"Dox": 10.0})
        tube2 = flow.Tube(file=fcs_file_a4_path,
                          conditions={"Dox": 1.0})

        import_op = flow.ImportOp(conditions={"Dox": "float"},
                                  tubes=[tube1, tube2],
                                  channels={'V2-A': 'V2-A',
                                            'Y2-A': 'Y2-A'})

        ex = import_op.apply()
        flow.HistogramView(scale='logicle',
                           channel='Y2-A').plot(ex)

        png_file = os.path.join(SHARED_PLOT_DIR, 'histogram.png')
        print(png_file)
        grid(True)
        savefig(png_file)
        self.response['histogram'] = 'histogram.png'

        g = flow.GaussianMixtureOp(name="Gauss",
                                   channels=["Y2-A"],
                                   scale={"Y2-A": "logicle"},
                                   num_components=2)

        g.estimate(ex)
        g.default_view().plot(ex)
        ex2 = g.apply(ex)
        g.default_view().plot(ex2)
        png_file = os.path.join(SHARED_PLOT_DIR, 'gausian.png')
        print(png_file)
        grid(True)
        savefig(png_file)
        self.response['gausian'] = 'gausian.png'

        print(type(ex2.data.head()))

        png_file = os.path.join(SHARED_PLOT_DIR, 'gausian_table.png')
        self.__df_to_png(ex2.data.head(), png_file)
        self.response['gausian_table'] = 'gausian_table.png'

        subplots(clear=True)
        g = flow.GaussianMixtureOp(name="Gauss",
                                   channels=["V2-A"],
                                   scale={"V2-A": "logicle"},
                                   num_components=2,
                                   posteriors=True)

        g.estimate(ex)
        ex2 = g.apply(ex)
        g.default_view().plot(ex2)
        png_file = os.path.join(SHARED_PLOT_DIR, 'gausian_posterior.png')
        savefig(png_file)
        self.response['gausian_posterior'] = 'gausian_posterior.png'

        png_file = os.path.join(SHARED_PLOT_DIR, 'gausian_posterior_table.png')
        self.__df_to_png(ex2.data.head(), png_file)
        self.response['gausian_posterior_table'] = 'gausian_posterior_table.png'

        # We can use this second metadata column to filter out events with low posterior probabilities:
        ex2.query("Gauss_1_posterior > 0.9 | Gauss_2_posterior > 0.9").data.head()
        flow.HistogramView(channel="V2-A",
                           huefacet="Gauss",
                           scale="logicle",
                           subset="Gauss_1_posterior > 0.9 | Gauss_2_posterior > 0.9").plot(ex2)
        png_file = os.path.join(SHARED_PLOT_DIR, 'gausian_filtered_low_posterior.png')
        savefig(png_file)
        self.response['gausian_filtered_low_posterior'] = 'gausian_filtered_low_posterior.png'

        subplots(clear=True)
        # Basic usage, assigning each event to one of the mixture components: (the isolines in the default_view() are 1, 2 and 3 standard deviations away from the mean.)
        g = flow.GaussianMixtureOp(name="Gauss",
                                   channels=["V2-A", "Y2-A"],
                                   scale={"V2-A": "logicle",
                                          "Y2-A": "logicle"},
                                   num_components=2)

        g.estimate(ex)
        ex2 = g.apply(ex)
        g.default_view().plot(ex2, alpha=0.1)
        png_file = os.path.join(SHARED_PLOT_DIR, 'gausian_mixture_model_two_channels.png')
        savefig(png_file)
        self.response['gausian_mixture_model_two_channels'] = 'gausian_mixture_model_two_channels.png'

        subplots(clear=True)
        # K-Means
        self.k_means(ex)

        # FlowPeaks
        ecoli_file_path = os.path.join(SHARED_RAW_DIR, ECOLI_FILE)
        print('Ecoli ', ecoli_file_path)
        ex = flow.ImportOp(tubes=[flow.Tube(file=ecoli_file_path)]).apply()

        flow.ScatterplotView(xchannel="FSC-A",
                             xscale='log',
                             ychannel="FSC-H",
                             yscale='log').plot(ex)
        png_file = os.path.join(SHARED_PLOT_DIR, 'flow_peaks.png')
        savefig(png_file)
        self.response['flow_peaks'] = 'flow_peaks.png'

        # K-MEANS2
        self.k_means2(ex)

    def k_means(self, ex):
        k = flow.KMeansOp(name="KMeans",
                          channels=["V2-A", "Y2-A"],
                          scale={"V2-A": "logicle",
                                 "Y2-A": "logicle"},
                          num_clusters=2,
                          by=['Dox'])

        k.estimate(ex)
        ex2 = k.apply(ex)
        k.default_view(yfacet="Dox").plot(ex2)
        png_file = os.path.join(SHARED_PLOT_DIR, 'k_means.png')
        savefig(png_file)
        self.response['k_means'] = 'k_means.png'

    def k_means2(self, ex):
        k = flow.KMeansOp(name="KMeans",
                          channels=["FSC-A", "FSC-H"],
                          scale={"FSC-A": "log",
                                 "FSC-H": "log"},
                          num_clusters=3)

        k.estimate(ex)
        ex2 = k.apply(ex)
        k.default_view().plot(ex2)
        png_file = os.path.join(SHARED_PLOT_DIR, 'k_means2.png')
        savefig(png_file)
        self.response['k_means2'] = 'k_means2.png'

    def __df_to_png(self, df, file_path):
        # Clear prev sub plot
        subplots(clear=True)
        matplotlib.rc('figure', dpi=160)

        ax = plt.subplot(111, frame_on=False)  # no visible frame
        ax.xaxis.set_visible(False)  # hide the x axis
        ax.yaxis.set_visible(False)  # hide the y axis

        table(ax, df, loc='center')  # where df is your data frame
        savefig(file_path)
        return self.response

    def get_plots(self):
        return self.response


# If script ran from terminal
if __name__ == '__main__':
    mlearn = MachineLearning()

    print(os.path.basename(__file__))
    print(__name__)