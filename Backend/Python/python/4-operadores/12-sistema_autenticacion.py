print('*** Sistema de Autenticacion ***')

USUARIO = 'admin'
PASSWORD = 123

usuario = input('Cual es tu usuario? ')
password = int(input('Cual es tu password? '))

# Logica del programa
autenticacion = USUARIO == usuario and PASSWORD == password
print(f'Datos correctos? {autenticacion}')