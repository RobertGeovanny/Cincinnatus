print('*** Valor Dentro de Rango ***')

# Definiendo limites del rango
VALOR_MINIMO = 0
VALOR_MAXIMO = 5

# Solicitamos un valor entre 0 y 5
rango = int(input(f'Proporciona un valor entre {VALOR_MINIMO} y {VALOR_MAXIMO}: '))

# Verificamos si el dato se encuentra dentro de rango
# respuesta = rango >= VALOR_MINIMO and rango <= VALOR_MAXIMO
respuesta = VALOR_MINIMO <= rango <= VALOR_MAXIMO

print(f'El valor proporcionado esta dentro de rango? {respuesta}')