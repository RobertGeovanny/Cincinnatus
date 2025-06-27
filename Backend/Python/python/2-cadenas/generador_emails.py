print('*** Generador de Email ***')

nombre_usuario = 'Robert Vasquez Mora'
print(f'\nNombre de Usuario: {nombre_usuario}')
nombre_usuario_normalizado = nombre_usuario.lower().strip().replace(' ', '.')
print(f'Nombre de Usuario Normalizado: {nombre_usuario_normalizado}')

nombre_empresa = 'Global Mentoring'
print(f'\nNombre de Empresa: {nombre_empresa}')
dominio = '.com.do'
print(f'Dominio de la empresa: {dominio}')
dominio_email_normalizado = '@' + nombre_empresa.lower().strip().replace(' ', '.') + dominio
print(f'Dominio de email normalizado: {dominio_email_normalizado}')

email_final_normalizado = nombre_usuario_normalizado + dominio_email_normalizado
print(f'\nEmail final generado: {email_final_normalizado}')


