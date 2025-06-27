# Valores aleatorios con la funcion "randint"

import random
from random import randint

# Generar un numero aleatorio entre 1 y 10
numero = random.randint(1, 10) # con "import" cuando importamos la funcion de "randint" tenemos que especificar el nombre del modulo y despues la funcion a utilizar
print(f'Numero aleatorio entre 1 y 10: {numero}')

# Simular un dado de seis caras
dado = randint(1, 6) 
print(f'Resultado de lanzar el dado: {dado}')