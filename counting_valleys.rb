def countingValleys(n, s)
    # split the string and count number of U and D
    # A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
    
    # if valley = 0

    i = 0
    steps = 0
    valley = 0
    length = n - 1

    while i <= length do
        if s[i] == "U"
            steps += 1
        else
            if steps == 0
                valley += 1
            end
            steps -= 1
        end

        i += 1
    end

    valley
end

p countingValleys(8, "UDDDUDUU")

p countingValleys(12, "DDUUDDUDUUUD")