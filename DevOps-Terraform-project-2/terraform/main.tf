provider "aws" {
  region = "us-east-1"
}

# Master Node
resource "aws_instance" "master" {
  ami           = "ami-0a7d80731ae1b2435"
  instance_type = "t2.medium"
  key_name      = "newkey"

  tags = {
    Name = "kube-master"
  }
}

# Worker Node 1
resource "aws_instance" "slave1" {
  ami           = "ami-0a7d80731ae1b2435"
  instance_type = "t2.medium"
  key_name      = "newkey"

  tags = {
    Name = "kube-slave1"
  }
}

# Worker Node 2
resource "aws_instance" "slave2" {
  ami           = "ami-0a7d80731ae1b2435"
  instance_type = "t2.medium"
  key_name      = "newkey"

  tags = {
    Name = "kube-slave2"
  }
}
