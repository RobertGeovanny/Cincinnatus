print('*** Sistema de Reserva de Hoteles ***')

# Datos del cliente
nombre_cliente = 'Robert Geovanny Vasquez'
dias_estancia = 3
tarifa_diaria = 1550.0
habitaciones_vista = True

# Mostrando los datos por consola
print(f'\nCliente: {nombre_cliente}')
print(f'Dias de estancia: {dias_estancia}')
print(f'Tarifa diaria: {tarifa_diaria}')
print(f'Habitacion con vista al mar? {habitaciones_vista}')

# Modificando algunos datos
dias_estancia = 7
tarifa_diaria = 1104.99
habitaciones_vista = False

# Reimprimiendo datos por consola
print(f'\n*** Datos Actualizados de Reserva de Hotel ***')
print(f'\nCliente: {nombre_cliente}')
print(f'Dias de estancia: {dias_estancia}')
print(f'Tarifa diaria: {tarifa_diaria}')
print(f'Habitacion con vista al mar? {habitaciones_vista}')