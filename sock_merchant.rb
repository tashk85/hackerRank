def sockMerchant(n, ar)
    things = ar.uniq.map {|x| [x,ar.count(x)]}.to_h
    num = 0
    things.each_value { |value| num += (value / 2) }
    return num
end

p sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])