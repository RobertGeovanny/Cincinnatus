# Conversion tipos de datos

# Convertir de cadena a numero
numero_cadena = '10'
numero_entero = int(numero_cadena)
print(f'Valor numerico en cadena: {numero_cadena}')
print(f'Cadena a entero: {numero_entero}')

# Convertir de cadena a flotante
numero_cadena = '3.14'
numero_flotante = float(numero_cadena)
print(f'\nCadena a flotante: {numero_flotante}')

#Convertir de numero a cadena
numero_entero = 25
numero_cadena = str(numero_entero)
print(f"\nNumero a cadena: {numero_cadena}")

# Convertir a booleano
# Tipo bool es Falso en los siguientes casos
# Si el valor es 0, cadena vacia, o None, entonces regresa False
# Regresa True, si el valor es distinto de 0, si es distinto de cadena vacia
# y tambien si es distinto de None
numero_entero = 0
booleano = bool(numero_entero)
print(f'\nValor booleano de 0: {booleano}') #False, incluye 0, 0.0

numero_entero = 5
booleano = bool(numero_entero)
print(f'\nVolar booleano de 5: {booleano}') # True

cadena = '' # El largo de la cadena es 0
booleano = bool(cadena)
print(f'\nValor booleano de cadena vacia: {booleano}') # Falso, incluye colecciones vacias

cadena = 'Cadena con valor'
booleano = bool(cadena)
print(f'\nValor booleano de cadena NO vacia: {booleano}')
