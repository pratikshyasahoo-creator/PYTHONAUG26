paragraph = """Technology has changed the way we live and work.
Smartphones, the internet and artificial intelligence connect people across the world.
Automation saves time, but it also demands new skills from everyone."""

with open("article.txt", "w") as f:
    f.write(paragraph)

with open("article.txt", "r") as f:
    content = f.read()

with open("article.txt", "r") as f:
    lines = len(f.readlines())

print("Total characters:", len(content))
print("Total words:", len(content.split()))
print("Total lines:", lines)
