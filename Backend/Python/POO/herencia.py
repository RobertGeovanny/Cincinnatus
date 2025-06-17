# Herencia

class Pokemon:
  pass
  def __init__(self,nombre,tipo):
    self.nombre = nombre
    self.tipo = tipo
    
  def descripcion(self):
    return '{} es un pokemon de tipo: {}'.format(self.nombre, self.tipo)
  
class Pikachu(Pokemon):
  def ataque(self,tipo_ataque):
    return '{} tipo de ataque: {}'.format(self.nombre, tipo_ataque)
  
class Charmander(Pokemon):
  def ataque(self, tipo_ataque):
    return '{} tipo de ataque: {}'.format(self.nombre, tipo_ataque)
  
nuevo_pokemon = Pikachu('Boby', 'Electrico')
print(nuevo_pokemon.descripcion())
print(nuevo_pokemon.ataque('Impacto Trueno'))