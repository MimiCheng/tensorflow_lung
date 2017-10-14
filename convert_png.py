from PIL import Image
import glob
import os


def main():

    label = ['Atelectasis','Cardiomegaly','Consolidation','Edema','Effusion','Emphysema','Fibrosis','Hernia',
                    'Infiltration','Mass','Normal','Nodule','Pleural_Thickening','Pneumonia','Pneumothorax']

    for i in label:
        path = r'C:/Users/Mimi/git/tensorflow_lung/tf_files/lung_photos_png/{}/'.format(i)
        output_dir = "C:/Users/Mimi/git/tensorflow_lung/tf_files/lung_photos/{0}/".format(i)

        print(path)
        for file in glob.glob(path + "*.png"):
            im = Image.open(file)
            file2 = file.split("\\")[-1].replace(".png", "")
            #create folder if not exists
            if not os.path.exists(output_dir):
                os.makedirs(output_dir)
            im.save(output_dir + "{}.jpg".format(file2))


if __name__ == "__main__":
    main()