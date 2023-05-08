#!/bin/bash

echo "Setup"

pip install -r requirements.txt
python3 -m setup -d true &

echo "Done"
