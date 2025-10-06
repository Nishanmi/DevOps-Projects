- name: task for slaves
  hosts: slaves
  become: yes
  tasks:
    - name: software installation for slaves
      script: slaves.sh
