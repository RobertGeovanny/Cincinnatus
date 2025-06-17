# herencia ejemplo practico

class Calculadora:
  def __init__(self, numero):
    self.n = numero
    self.datos = [0 for i in range(numero)]
    
  def ingresar_dato(self):
    self.datos = [int(input('ingresar datos ' + str(i+1) + ' = ')) for i in range(self.n)]
    
class Op_basicas(Calculadora):
  def __init__(self):
    Calculadora.__init__(self, 2)
  
  def suma(self):
    a,b = self.datos
    s = a + b
    return f'El resultado de la suma es: {s}'
  
  def resta(self):
    a,b = self.datos
    s = a - b
    return f'El resultado de la resta es: {s}'
    
  def multiplicacion(self):
    a,b = self.datos
    s = a * b
    return f'El resultado de la multiplicacion es: {s}'
  
  def division(self):
    a,b = self.datos
    s = a / b
    return f'El resultado de la division es: {s}'

class Raiz(Calculadora):
  def __init__(self):
    Calculadora.__init__(self,1)
  
  def cuadrada(self):
    import math
    a, = self.datos
    return f'El resultado es: {math.sqrt(a)}'
    
    
calculadora = Op_basicas()
print(calculadora.ingresar_dato())
print(calculadora.suma())