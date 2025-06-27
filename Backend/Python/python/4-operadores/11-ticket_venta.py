print('*** Generacion Tiket de Venta ***')

precio_leche = float(input('Precio leche: '))
precio_pan = float(input('Precio pan: '))
precio_lechuga = float(input('Precio lechuga: '))
precio_platanos = float(input('Precio platanos: '))
descuento_porcentual = float(input('Descuento a aplicar (colocar como un numero entero ej: 10): '))

# Calculo del subtotal (sin impuestos)
subtotal = precio_leche + precio_pan + precio_lechuga + precio_platanos

# Calculo con impuestos (16%)
impuesto = subtotal * 0.18

# Calculo con descuento
descuento = subtotal * (descuento_porcentual/100)

# Subtotal con descuento
subtotal_con_descuento = subtotal - descuento

# Calculo total de la compra (con impuestos)
costo_total_compra = subtotal_con_descuento + impuesto
print(f'''
Subtotal RD${subtotal}
Descuento RD${descuento} ({descuento_porcentual}%)
subtotal con descuento RD${subtotal_con_descuento}
Impuesto (18%): RD${impuesto:.2f}
Costo total de la compra: RD${costo_total_compra}
''')