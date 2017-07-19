// https://gist.github.com/kasun-maldeni/abb971bb1ef61084ee5c262488fcf8b3/

// Quiz - Decode this message!

// Write a program to decode this message:

// FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.

// This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.

// The alphabet is normally:

// ABCDEFGHIJKLMNOPQRSTUVWXYZ

// The alphabet with the shift parameter of 3 is now as follows:

// DEFGHIJKLMNOPQRSTUVWXYZABC

// var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH";
// var arraymessage = message.split("");
// console.log(arraymessage);

var newmessage = [];
var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH";
var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
var arraymessage = message.split("");
console.log(arraymessage);

for (var i = 0; i < arraymessage.length; i++) {

	if (arraymessage[i] == alphabets[0]) {
						newmessage.push(alphabets[23]);
				} else if (arraymessage[i] == alphabets[1]) {
					newmessage.push(alphabets[24]);
				} else if (arraymessage[i] == alphabets[2]) {
					 newmessage.push(alphabets[25]);
				} else if (arraymessage[i] == alphabets[26]) {
					newmessage.push(alphabets[26]);
				} else {

	for (var r = 0; r < alphabets.length; r++) {
				if (arraymessage[i] == alphabets[r] && arraymessage[i] > alphabets[2]) {
					newmessage.push(alphabets[r-3]);
				}
			}
		}
			console.log(newmessage);
console.log(newmessage.join(""));
		}

	

	// JS Solution

var caesarSalad = function(str, amount) {
	// Wrap the amount
	if (amount < 0)
		return caesarSalad(str, amount + 26);
	// Make an output variable
	var output = '';
	// Go through each character
	for (var i = 0; i < str.length; i ++) {
		// Get the character we'll be appending
		var c = str[i];
		// If it's a letter...
		if (c.match(/[a-z]/i)) {
			// Get its code
			var code = str.charCodeAt(i);
			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		// Append
		output += c;
	}
	// All done!
	return output;
};

// caesarSalad("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3);
// caesarSalad("DEFGHIJKLMNOPQRSTUVWXYZABC", -3);
caesarSalad("FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.", -3);

// caesarSalad("Good Morning, here is your morning warmup. You can choose to do this in Ruby or Javascrip. Have fun... And don't forget to ask questions...", 3);

// Ruby Solution

class CesarCipher

  ALPHABET = %w(a b c d e f g h i j k l m n o p q r s t u v w x y z)

  def self.decode(string, shift=3)

    decoded = []
    shift = shift.to_i
    string.downcase!

    string.each_char do |char|
      if char == ' '
        decoded << ' '
      elsif ALPHABET.include?(char)
        index = ALPHABET.index(char)
        new_index = index - shift
        decoded << ALPHABET[new_index]
      else
        decoded << char
      end

    end
    decoded.join
  end

  def self.encode(string, shift=3)

    coded = []
    shift = shift.to_i
    string.downcase!

    string.each_char do |char|
      if char == ' '
        coded << ' '
      elsif ALPHABET.include?(char)
        index = ALPHABET.index(char)
        new_index = index + shift
        coded << ALPHABET[new_index]
      else
        coded << char
      end

    end
    coded.join
  end
end

p CesarCipher.encode(' ')

p CesarCipher.decode("QEXKHP JXQQ! VBP F ZXK ABJL! ")

