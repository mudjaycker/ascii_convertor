import eel

eel.init('public')


@eel.expose
def to_hexa(char: str):
    if char:
        unicode_str = char.encode("utf-8")
        result = unicode_str.hex()
        return result

eel.start('index.html')
