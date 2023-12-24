# Stablecoin reserves
reserves_a = 1020  # 1M reserves for stablecoin A
reserves_b = 1000    # 500k reserves for stablecoin B
reserves_c = 0  # 2M reserves for stablecoin C

weight_a = 50  # 40% for stablecoin A
weight_b = 50  # 10% for stablecoin B
weight_c = 0  # 50% for stablecoin C

a = 100
b = 100
c = 100

print( a + b + c)

def calculatePercentages():
    tot_reserves = reserves_a + reserves_b + reserves_c
    
    percA = (reserves_a / tot_reserves) * 100
    percB = (reserves_b / tot_reserves) * 100
    percC = (reserves_c / tot_reserves) * 100
    
    print(" ")
    print("% - A: " + str(percA))
    print("% - B: " + str(percB))
    print("% - C: " + str(percC))
    print(" ")
    
calculatePercentages()

def calculate_max_deposit_without_penalty(reserves, weight, total_reserves):
    """
    Calculate the maximum amount a user can deposit without incurring a penalty.
    
    :param reserves: Current reserves of the stablecoin.
    :param weight: Target weight of the stablecoin in percentage.
    :param total_reserves: Total reserves of all stablecoins.
    :return: Maximum deposit without penalty.
    """
    if weight == 0:
        return 0
    else:
        # Allowed deviation is ±5%
        allowed_deviation = 5

        # Calculate the upper limit for the weight
        upper_limit_percentage = weight + allowed_deviation

        # Calculate the maximum reserves allowed for this stablecoin without penalty
        max_reserves_without_penalty = (upper_limit_percentage / 100) * total_reserves

        # Calculate the maximum deposit allowed without penalty
        max_deposit_without_penalty = max_reserves_without_penalty - reserves

        # If the calculated max deposit is negative, set it to zero
        max_deposit_without_penalty = max(max_deposit_without_penalty, 0)

        return max_deposit_without_penalty

# Total reserves
total_reserves = reserves_a + reserves_b + reserves_c

# Calculate max deposit without penalty for each stablecoin
max_deposit_a = calculate_max_deposit_without_penalty(reserves_a, weight_a, total_reserves)
max_deposit_b = calculate_max_deposit_without_penalty(reserves_b, weight_b, total_reserves)
max_deposit_c = calculate_max_deposit_without_penalty(reserves_c, weight_c, total_reserves)

print("A: " + str(max_deposit_a))
print("B: " + str(max_deposit_b))
print("C: " + str(max_deposit_c))
