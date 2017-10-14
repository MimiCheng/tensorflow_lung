import os, csv
from shutil import copy
import re

'''
-- shutil.copy --
copy the source file to the destination directory
destination directory has to exist
if the filename already exists there, it will be overwritten
'''


def main():


    match_label = ['Atelectasis','Cardiomegaly','Consolidation','Edema','Effusion','Emphysema','Fibrosis','Hernia',
                'Infiltration','Mass','Normal','Nodule','Pleural_Thickening','Pneumonia','Pneumothorax']

    src = r'C:/Users/Mimi/git/tensorflow_lung/images/'

    names = []

    for dirname, dirnames, filenames in os.walk(src):
       for filename in filenames:
           if filename.endswith('.png'):
               names.append(filename)


    file = open('./tensorflow_lung/Data_Entry_2017.csv')
    lns = csv.reader(file)
    for line in lns:
        nam = line[0]
        label = line[1]
        if label == 'No Finding':
            label.replace('No Finding','Normal')
        if nam in names:
            for regex in match_label:
                output_dir = './tensorflow_lung/tf_files/lung_photos/{}'.format(regex)

                #create folder if not exists
                if not os.path.exists(output_dir):
                    os.makedirs(output_dir)

                if bool(re.search(regex, label)) == True:
                    print(nam, label, regex)
                    copy(src + nam, output_dir)


if __name__ == "__main__":
    main()
