### Aula
## 

### Instale o vagrant
### Clona o repositório
``` Git clone https://github.com/fredux/gerenciaconf.git ```

cd Ansible
vagrant up
vagrant ssh ubuntu
### defina a senha para 123456
``` sudo passwd ubuntu ```

### sai 
``` exit ```

``` ssh ubuntu@192.168.56.10 ```
### insira a senha definida anteriormente

### executa o comando do ansible no terminal
``` ansible-playbook -i /inventories/server-client/host.ini /playbooks/apache_ubuntu/playbook.yml  -vvvv ```

