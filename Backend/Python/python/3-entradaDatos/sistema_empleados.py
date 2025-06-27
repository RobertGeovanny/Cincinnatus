print('*** Sistema de empleados ***')
nombre_empleado = input('Ingrese el nombre del empleado: ')
edad_empleado = int(input('Edad del empleado: '))
salario_empleado = float(input('Salario del empleado: '))
es_jefe_departamento = input('es jefe departamento (Si/No)? ')

# Vamos a convertir a un tipo 'bool' la variable es_jefe_departamento
es_jefe_departamento = es_jefe_departamento.lower() == 'si'

# Imprimir los valores del Empleado
print('\n*** Datos del Empleado ***')
print(f'Nombre: {nombre_empleado}')
print(f'Edad: {edad_empleado}')
print(f'Salario: {salario_empleado:.2f}') # :.2f indica la cantidad de decimales que queremos imprimir la 'f' es por float
print(f'Es Jefe de Departamento? {es_jefe_departamento}')