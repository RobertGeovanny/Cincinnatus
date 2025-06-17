# f-string
class Estudiante:
  def __init__(self, nombre, apellido, edad):
    self.nombre = nombre
    self.apellido = apellido
    self.edad = edad
  
  def __str__(self):
    return f'Hola que tal soy {self.nombre} {self.apellido} y tengo {self.edad}'
nuevo_estudiante = Estudiante('Robert', 'Vasquez', 24)
print(f'{nuevo_estudiante}')