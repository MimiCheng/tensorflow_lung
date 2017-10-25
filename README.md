# tensorflow_lung

Reading and diagnosing chest x-ray images may be a relatively simple task for radiologists but, in fact, it is a complex reasoning problem which often requires careful observation and knowledge of anatomical principles, physiology and pathology.

The model is built from [chest x-ray datasets provided by NIH](https://goo.gl/gkZXvE)

## Requirements

* tensorflow 1.3.0
* training image in JPEG format 

### step1 : create /tf_file/lung_photos in root dir
Put all the training images into one folder inside images directory. 
Try to remove all duplicate images, they could inflate the test and validation accuracy.
### step2: run python match_label_image.py
### step3: run convert_png.py 
For converting training images from .png to .jpg
### step4: run script below
**script for retraining**

python -m scripts.retrain \
    --bottleneck_dir=tf_files/bottlenecks \
    --how_many_training_steps=<1000> \
    --model_dir=tf_files/models/ \
    --summaries_dir=tf_files/training_summaries/"${ARCHITECTURE}" \
    --output_graph=tf_files/retrained_graph.pb \
    --output_labels=tf_files/retrained_labels.txt \
    --image_dir=<tf_files/lung_photos>

**script for test image**

python -m scripts.label_image \
    --graph=tf_files/retrained_graph.pb \
    --image=<normal_web/1-10.jpg>
