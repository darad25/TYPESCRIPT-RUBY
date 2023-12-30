# Assume a function to get a random number between 100 and 200
def rand()
    rand(100..200)
  end
  
  # Constants
  tubes_per_unit = 4
  units_in_classroom = 4
  hours_per_day = 15
  days_per_week = 5
  weeks_per_year = 39
  months_per_year = 9
  cost_per_tube = 7
  
  # Function to calculate the total broken tubes and cost
  def calculate_cost()
    total_tubes = 0
    total_cost = 0
  
    (1..units_in_classroom).each do |unit|
      tubes_in_unit = tubes_per_unit
      hours_left = 0
      tubes_failed = 0
  
      (1..days_per_week * weeks_per_year * months_per_year).each do |day|
        (1..tubes_in_unit).each do |_tube|
          if hours_left <= 0
           # Fluorescent tube failed, replace it
            total_tubes += 1
            tubes_in_unit -= 1
            hours_left = rand()
          else
            hours_left -= 1
          end
        end
  
        # If 2 tubes failed, replace all 4 tubes in the unit
        if tubes_failed >= 2
          total_tubes += tubes_in_unit
          tubes_in_unit = tubes_per_unit
          tubes_failed = 0
        end
      end
    end
  
    total_cost = total_tubes * cost_per_tube
    return { total_tubes: total_tubes, total_cost: total_cost }
  end
  
  # Calculate and print the result
  result = calculate_cost()
  puts "Total broken tubes in 1 year: #{result[:total_tubes]}"
  puts "Total cost per year: $#{result[:total_cost]}"
  