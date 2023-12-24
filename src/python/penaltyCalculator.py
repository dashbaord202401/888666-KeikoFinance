def calculate_penalty_percentage(deposit_amount, reserves, weight, total_reserves):
    """
    Calculate the percentage of penalty a deposit would incur.
    
    :param deposit_amount: The amount to be deposited.
    :param reserves: Current reserves of the stablecoin.
    :param weight: Target weight of the stablecoin in percentage.
    :param total_reserves: Total reserves of all stablecoins.
    :return: Penalty percentage for the deposit.
    """
    # New reserves after deposit
    new_reserves = reserves + deposit_amount

    # Calculate the actual weight percentage after deposit
    actual_weight_percentage = (new_reserves / total_reserves) * 100

    # Calculate deviation from the target weight
    deviation_percentage = abs(actual_weight_percentage - weight)

    # Calculate the fee based on deviation
    if deviation_percentage <= 5:
        return 0
    else:
        a = 0.15  # Coefficient for quadratic term
        b = 0.025  # Coefficient for linear term
        fee = a * deviation_percentage ** 2 + b * deviation_percentage
        return fee, deviation_percentage  # Ensuring the fee doesn't exceed 100%

# Example usage
penalty_percentage = calculate_penalty_percentage(
    deposit_amount=200,
    reserves=1000,
    weight=50,
    total_reserves=2000
)

print("Penalty Percentage:", penalty_percentage)
