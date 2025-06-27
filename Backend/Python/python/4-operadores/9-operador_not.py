print('*** Operador "not" ***')

condicion1 = True
resultado = not condicion1
print(f'Operador "not" {condicion1}: {resultado}')

# Revisar si una variable es cadena vacia
nombre = ''
es_cadena_vacia = not nombre
print(f'\nLa variable NO tiene ningun valor? {es_cadena_vacia}')

# Revisar si una variable no tiene ningun valor asignado
variable = None
es_cadena_vacia = not variable
print(f'\nLa variable NO tiene ningun valor asignado? {es_cadena_vacia}')