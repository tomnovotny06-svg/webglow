from PIL import Image, ImageDraw, ImageFont

FONT_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

def draw_wordmark(bg_color, stroke_color, text_color, width=800, height=200):
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    if bg_color:
        draw.rectangle([0, 0, width, height], fill=bg_color)

    # Draw W icon on the left
    icon_size = height - 40
    padding = 20
    scale = icon_size / 40
    ox = padding
    oy = 20

    points = [
        (4*scale + ox, 8*scale + oy),
        (13*scale + ox, 32*scale + oy),
        (20*scale + ox, 16*scale + oy),
        (27*scale + ox, 32*scale + oy),
        (36*scale + ox, 8*scale + oy),
    ]

    lw = max(6, int(scale * 0.75))
    draw.line(points, fill=stroke_color, width=lw, joint="curve")

    # Draw WEBGLOW text to the right of the icon
    text = "WEBGLOW"
    font_size = int(height * 0.38)
    try:
        font = ImageFont.truetype(FONT_BOLD, font_size)
    except:
        font = ImageFont.load_default()

    text_x = icon_size + padding * 2 + 10
    bbox = draw.textbbox((0, 0), text, font=font)
    text_h = bbox[3] - bbox[1]
    text_y = (height - text_h) // 2 - bbox[1]

    # Letter spacing effect — draw char by char
    letter_spacing = 6
    x = text_x
    for ch in text:
        draw.text((x, text_y), ch, font=font, fill=text_color)
        cb = draw.textbbox((0, 0), ch, font=font)
        x += (cb[2] - cb[0]) + letter_spacing

    return img

# Version 1: Black on white (for email, documents)
v1 = draw_wordmark((255,255,255,255), (10,10,10,255), (10,10,10,255))
v1.save("/home/ubuntu/WEBGLOW_wordmark_white.png")

# Version 2: White on black
v2 = draw_wordmark((10,10,10,255), (255,255,255,255), (255,255,255,255))
v2.save("/home/ubuntu/WEBGLOW_wordmark_black.png")

# Version 3: Black on transparent
v3 = draw_wordmark(None, (10,10,10,255), (10,10,10,255))
v3.save("/home/ubuntu/WEBGLOW_wordmark_transparent.png")

print("Wordmark logos generated!")
