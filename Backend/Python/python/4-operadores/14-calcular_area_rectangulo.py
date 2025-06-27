print('*** Calcular el area de un rectangulo ***')

base = float(input('Proporciona el valor de la Base: '))
altura = float(input('Proporciona el valor de la Altura: '))

area = base * altura
perimetro = 2 * (base + altura) # Apolicando la precedencia de operadores

print(f'El Area del rectangulo es: {area}')
print(f'El perimetro del rectangulo es: {perimetro}')