print('*** Sistema Generador de Emails ***')

# Solicitando datos
nombre = input('Cual es su nombre? ')
apellidos = input('Cuales son sus apellidos? ')
nombre_empresa = input('Cual es el nombre de su empresa? ')
extension_dominio = input('Cual es la extension de Dominio de tu empresa? ')

# Normalizando datos
nombre = nombre.strip().lower().replace(' ', '.')
apellidos = apellidos.strip().lower().replace(' ', '.')
nombre_empresa = nombre_empresa.strip().lower().replace(' ', '')
extension_dominio = extension_dominio.strip().lower()

# Concatenando datos normalizados
email_generado = f'{nombre}.{apellidos}@{nombre_empresa}{extension_dominio}'
print(f'''\nTu nuevo email generado por el sistema es:
      {email_generado}
      Felicidades!''')