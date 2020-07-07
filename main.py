def on_received_number(receivedNumber):
    if receivedNumber == 1:
        Rover.motor_run_dual(100, 0)
        Rover.set_allrgb(Rover.colors(RoverColors.INDIGO))
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    if receivedNumber == 2:
        Rover.motor_run_dual(0, 100)
        Rover.set_allrgb(Rover.colors(RoverColors.BLUE))
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    if receivedNumber == 3:
        Rover.motor_run_dual(200, 200)
        Rover.set_allrgb(Rover.colors(RoverColors.GREEN))
        basic.show_leds("""
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    if receivedNumber == 4:
        Rover.motor_run_dual(0, 0)
        Rover.set_allrgb(Rover.colors(RoverColors.YELLOW))
        basic.show_leds("""
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            """)
        basic.show_leds("""
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            """)
    if receivedNumber == 5:
        Rover.set_allrgb(Rover.colors(RoverColors.ORANGE))
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            # # . # #
            """)
        basic.show_leds("""
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . . # # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # . .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            """)
        music.play_melody("F A C5 B A G D F ", 120)
    if receivedNumber == 6:
        Rover.set_allrgb(Rover.colors(RoverColors.RED))
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            # # . # #
            """)
        basic.show_leds("""
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . . # # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # . .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            """)
        music.play_melody("A G F A E A F C ", 120)
radio.on_received_number(on_received_number)

basic.show_string("Hello!")
Rover.set_allrgb(Rover.colors(RoverColors.WHITE))
radio.set_group(123)
Rover.set_allrgb(Rover.colors(RoverColors.VIOLET))
Rover.set_allrgb(Rover.colors(RoverColors.BLACK))
basic.show_arrow(ArrowNames.NORTH)
basic.show_icon(IconNames.HAPPY)
Rover.set_allrgb(Rover.colors(RoverColors.PURPLE))