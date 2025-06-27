print('*** Sistema de Descuentos ***')

# Pidiendo datos al cliente
monto_compra = float(input('Cual fue el monto de tu compra? '))
es_miembro_tienda = input('Eres miembro de la tienda (si/no)? ')

# Descuentos disponibles
descuento_10_porciento = monto_compra * 0.10
descuento_5_porciento = monto_compra * 0.05

# Montos finales con los descuentos aplicados
# Monto final con el descuento del 10% aplicado
monto_final_10 = monto_compra - descuento_10_porciento
# Monto final con el descuento del 5% aplicado
monto_final_5 = monto_compra - descuento_5_porciento

# Validando si aplica a algun descuento
if monto_compra >= 1000 and es_miembro_tienda.strip().lower() == 'si':
    print(f'''\nFelicidades, has obtenido un descuento del 10%
Monto de la compra: RD${monto_compra}
Monto del descuento: RD${descuento_10_porciento:.2f}
Monto final de la compra con descuento: RD${monto_final_10:.2f}
''')
elif monto_compra < 1000 and es_miembro_tienda.strip().lower() == 'si':
    print(f'''\nFelicidades, has obtenido un descuento del 5%
Monto de la compra: RD${monto_compra}
Monto del descuento: RD${descuento_5_porciento:.2f}
Monto final de la compra con descuento: RD${monto_final_5:.2f}
''')
else:
    print(f'''\nNo obtuviste ningun tipo de descuento
Te invitamos a hacerte mienbro de la tienda
Monto final de la compra: RD${monto_compra}
''')