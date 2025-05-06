from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

model_name = "facebook/m2m100_418M"
tokenizer = M2M100Tokenizer.from_pretrained(model_name)
model = M2M100ForConditionalGeneration.from_pretrained(model_name)

def translate(text, src_lang="quc", tgt_lang="es"):
    tokenizer.src_lang = src_lang
    encoded = tokenizer(text, return_tensors="pt")
    generated_tokens = model.generate(**encoded, forced_bos_token_id=tokenizer.get_lang_id(tgt_lang))
    return tokenizer.decode(generated_tokens[0], skip_special_tokens=True)

print(translate("La utz a wach?"))  # Intenta traducir desde K'iche' a español
