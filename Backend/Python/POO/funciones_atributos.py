class Persona:
  edad = 27
  nombre = 'victor'
  pais = 'Brazil'
  
doctor = Persona()

print('la edad es: ', getattr(doctor, 'edad')) # Podemos acceder al atributo de una clase mas rapido

print('la edad es: ', hasattr(doctor, 'edad')) # Nos devuelve un booleano si el atributo existe o no

print('Antes era: ', doctor.nombre)
setattr(doctor, 'nombre', 'hector') # Nos permite asignar otro valor al atributo que seleccionemos
print('ahora se llama: ', doctor.nombre)

delattr(Persona, 'pais') # Nos permite eliminar atributos de nuestra clase