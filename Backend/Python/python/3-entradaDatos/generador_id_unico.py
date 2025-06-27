# Generador de  ID unicos

from random import randint

print('*** Sistema Generador de ID Unico ***')

# Solicitando datos al Usuario
nombre = input('Cual es tu nombre? ')
apellido = input('Cual es tu apellido? ')
fecha_nacimiento = input('Cual es tu año de nacimiento? ')

# Normalizando datos
nombre1 = nombre[0:2].upper().strip()
apellido = apellido[0:2].upper().strip()
fecha_nacimiento = fecha_nacimiento[2:4]
codigo_aleatorio = str(randint(1000, 9999))

# Concatenando los datos normalizados
id_unico = f'{nombre1}{apellido}{fecha_nacimiento}{codigo_aleatorio}'

# Mostrando resultado al usuario
print(f'''\nHola {nombre},
    Tu nuevo numero de identificacion (ID) generado por el sistema es:
    {id_unico}
    Felicidades!''')