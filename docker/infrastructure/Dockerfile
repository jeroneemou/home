FROM ubuntu:18.04

RUN export DEBIAN_FRONTEND=noninteractive

# Update docker image
RUN apt update && apt -y upgrade

# Install python and other necessary base tooling
RUN apt -y install python3 python3-pip curl

# Install aws-cli
RUN pip3 install awscli

# Install node
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt -y install nodejs

# Install cdk
RUN npm install --global aws-cdk