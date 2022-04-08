

import math

def par(a):
    n = {}
    for i in a.keys():
        t = a[str(i)]
        if t['inputType'] == 'input-radio':
            if t['value'] == '18-26': 
                n['1'] = 1
            elif t['value'] == 'NO':
                n[str(i)] = 0
            elif t['value'] == 'YES':
                n[str(i)] = 1
        elif t['inputType'] == 'input-text':
            n[str(i)] = t['value']

    return n  
def prob(temp):
    coef = {
    '1' : 0.79,
    '2' : 0.14,
    '3' : 0.37,
    '4' : 0.4,
    '5' : 0.26,
    '6' : 0.15,
    '7' : 0.25,
    '8' : 0.40,
    '9' : 0.14,
    '10' : 0.56,
    '11' : 0.09,
    '12' : 0.10,
    '13' : 0.17,
    '14' : 0.15,
    '15' : 0.18,
    '16' : 0.17,
    '17' : 0.19,
    '18' : 0.20,
    '19' : -0.01
}
    inp = par(temp)
    
    sub = 0
    for i in inp.keys():
        co = float(coef[i])
        dig = float(inp[i])
        
        sub = sub + (co * dig)
    total = math.e**(11.5 - (sub*2))
    return round(((total/(1-total))*1000),0)
    

        
def main():
    a = {"1":{"value":"18-26","inputType":"input-radio"},"2":{"value":"NO","inputType":"input-radio"},"3":{"value":"YES","inputType":"input-radio"},"4":{"value":"NO","inputType":"input-radio"},"5":{"value":"NO","inputType":"input-radio"},"6":{"value":"YES","inputType":"input-radio"},"7":{"value":"NO","inputType":"input-radio"},"8":{"value":"YES","inputType":"input-radio"},"9":{"value":"NO","inputType":"input-radio"},"10":{"value":"NO","inputType":"input-radio"},"11":{"value":"YES","inputType":"input-radio"},"12":{"value":"5","inputType":"input-text"},"13":{"value":"8","inputType":"input-text"},"14":{"value":"4","inputType":"input-text"},"15":{"value":"3","inputType":"input-text"},"16":{"value":"7","inputType":"input-text"},"17":{"value":"8","inputType":"input-text"},"18":{"value":"2","inputType":"input-text"},"19":{"value":"5","inputType":"input-text"}}
    print(prob(a))

main()