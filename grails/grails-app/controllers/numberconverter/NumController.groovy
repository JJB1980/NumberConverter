package numberconverter

class NumController {

    def show() {
                String num = params.id
                String callback = params.callback
		String[] words1 = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"].toArray()
		String[] words2 = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"].toArray()
		String[] words3 = ["","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"].toArray()
		String[] words4 = ["","Thousand","Million","Billion","Trillion"].toArray()
		String[] parts = num.toString().split(",");
		String output = ""
		int partCount = parts.length
		for (int i = 0; i < parts.length; i++) {			
				String part = parts[i].toString()			
				int number = part.toInteger()
				//println n + " " + part;
				boolean nonZero = false
				if (number > 0) {
					nonZero = true
				}
				if ((i == parts.length - 1 && parts.length > 1) && number < 100 && number > 0) {
					output += " and"
				}
				if (number >= 100) {
					int hundred = part.substring(0, 1).toInteger()
					//println "hundred: " + hundred
					output += " " + words1[hundred - 1] + " Hundred"
					number = part.substring(1, 3).toInteger()
					if (number > 0) {
                                            output += " and"
                                        }
				}
				//println "remain: " + n
				if (number >= 10 && number < 20) {
					output += " " + words2[number-10]
				} else if (number < 10 && number > 0) {
					output += " " + words1[number-1]
				} else if (number > 0) {
					int p1 = number.toString().substring(0, 1).toInteger()
					output += " " + words3[p1-1]
					int p2 = number.toString().substring(1, 2).toInteger()
					if (p2 > 0) {
						output += " " + words1[p2-1]
					}
				}
				partCount-- 
				if (nonZero) {
					output += " " + words4[partCount]
				}
				//println output
		}
		render callback+'({"result": "'+ output.substring(0,2) + output.substring(2, output.length()).toLowerCase() +'"})'        
        }
}
