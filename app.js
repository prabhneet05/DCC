

const token = 'eyJraWQiOiJSY1Z1RGtRN0FnNlMwUURsMVg0Z1o5cF9YbVJuS21kOXdBaENDeWFISzlrIiwidmVyIjoiMS4wIiwiemlwIjoiRGVmbGF0ZSIsInNlciI6IjEuMCJ9.F74Cjib8Vs5hDXyngTRN_S3VaZ-6E5dkqyEd0LFE9LZKirsohHltvQcb0jyMZ4n9khVX-tinGF8B05EihE_uo6mdFwrjlENC8lNfvVdbzRBnf321g81eCDXu-O3E7LDSObX_hFd2TtTd3JzqV03x93_JjQIdH2AN9J6oElUi8OdHrhOcCZlfA80vRn1trmq827VwTwmAeG3D4crRMp3SgMOaniW--8nTahT0ej84mVzwgxhXUD4stGpgoNImXqNpWt8RU91LQANLxO3xHgPe1s5cxd2jmMLOKDRkNgVVL40Qj-ZuWwKYtuAZR3z8aBhd0Zs5jO26ZlYHL7SqHg52hQ.wZ4StWfbMj7h8kBY.dXzbKT7JPDHPfVDOOHm5Fb7G9Jh4p6KkS2lguN_GOhi-Q1Z73feDZFNzOpN8NaHdGOrheVd98m4aihF2Xnb8hQy3IBxllACNffMrRgsMIbdoqUxxC6MZ9uPxWKLgmJ_Tor8K8oua0hWX6i8PoLel2Jf6N2mTr77BMKrMMIt8XzU1sXWAyF5WIXWUFS1WMtTyRUAmRAZjGOI5Q5eLoR8ulZB7VaA2yMmkxfbslH7EpOh4XFCVDa4KESEFgrSWy2bpIBterDMWXfdsLFX7tZryZEOLycYQWvGMnXYpjU2JSN_KZieWIbcu3FdrzbFtxmEDkXfEdPnTLv0qKHd09cO0AFJiM_vUFyjafOP6V23GUHkKtoxqPQ6FE9ZMJs1RPLszTXnpIMxVZkPSCNlGZRRPCj6_Re0ue5oUimt0wlskHRl9yxF7MzpAbS5ecubQqfDeYxAy_wHWvPIRrDFkgiFnXT5enP57eVJ-IxwDBdbO2ePQSVrK43opfC5P9Bqx6qaE07e1XS1vim580y23e1MD1vhycFQA--j9jPs0sY-G2gDooOl36qeEa8c77qDoFqaXK8qI8EayUPj2SrVIHTE1c5P17bPyUG_3Mtah3tCqerEdK3w5DkxTr9twCA_dVVqZ2VHWAvygtmfbrbJ_qtpA9B9qXEKpZ79OMAJs_dYAlQaDQLVgq-k.qP2jb5oXZ0WKoV8Tsbc-0w';

try {
  const decoded = Buffer.from(token, 'base64').toString('utf-8');
  console.log(decoded);
} catch (err) {
  console.error(err);
}