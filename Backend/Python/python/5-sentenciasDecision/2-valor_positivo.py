print('*** Revision de Valor Positivo ***')

numero = int(input('Proporciona un numero: '))

if numero > 0:
    print(f'\nEs positivo: {numero}')
elif numero < 0:
    print(f'\nEs negativo: {numero}')
else:
    print(f'\nEs cero {numero}')