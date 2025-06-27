import math

print('*** Constantes en Python ***')

PI = 3.14159
print(f'El valor de PI es: {PI}')

NOMBRE_BASE_DATOS = 'clientes_db'
print(f'Nombre de la base de datos: {NOMBRE_BASE_DATOS}')

# Esto NO se debe hacer, no se debe modificar el valor de una constante
NOMBRE_BASE_DATOS = 'listado_clientes_db'
print(f'No cambiar el valor de una constante: {NOMBRE_BASE_DATOS}')

# Usar una constante de lenguaje Python, aunque en este caso no este en mayusculas
print(f'Valor de math.pi {math.pi}')