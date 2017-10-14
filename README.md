# tensorflow_lung

### step1 : create /tf_file/lung_photos in root dir
### step2: run python match_label_image.py
### step3: run convert_png.py
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
