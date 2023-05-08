#!/bin/bash

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Starting translate API server..."
python3 -m setup -d true &

sleep 2
ps fax | grep python

echo "Done"
