# Herencia Multiple

class Telefono:
  def __init__(self):
    pass
  def llamar(self):
    print('Llamando...')
  def ocupado(self):
    print('Ocupado...')

class Camara:
  def __init__(self):
    pass
  def fotografia(self):
    print('Tomando fotos...')

class Reproduccion:
  def __init__(self):
    pass
  def reproduccion_de_musica(self):
    print('Reproduciendo musica')
  def reproduccion_de_video(self):
    print('Reproduciendo video')

# 'del' basicamente es una forma explicita de 'eliminar' smartphone debido 
# a que smartphone no tiene una funcion especifica y basicamente su objetivo 
# es el de ser contenedor de las demas clases
# Y ayuda al ahorro de memoria
class Smartphone(Telefono,Camara,Reproduccion):
  def __del__(self):
    print('Telefono apagado...')
    
movil = Smartphone()
print(dir(movil)) # dir nos indica que metodos especiales podemos usar en movil que es una instancia de Smarthphone