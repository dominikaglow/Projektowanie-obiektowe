program GenerateRandomNumbersProgram;

var
  randomNumsArray: array of Integer;

procedure SortNumbers;
var
  i, j, temp: Integer;
begin
  for i := 0 to Length(randomNumsArray) - 2 do
    for j := 0 to Length(randomNumsArray) - 2 do
      if randomNumsArray[j] > randomNumsArray[j + 1] then
      begin
        temp := randomNumsArray[j];
        randomNumsArray[j] := randomNumsArray[j + 1];
        randomNumsArray[j + 1] := temp;
      end;
end;

procedure GenerateRandomNumbers;
var
  i: Integer;
begin
  Randomize;

  SetLength(randomNumsArray, 50);
  write('Generated numbers: ');
  for i := 0 to 49 do
  begin
    randomNumsArray[i] := Random(101);
    write(randomNumsArray[i], ' ');
  end;

  writeln();
  
  SortNumbers;
  write('Sorted numbers: ');
  for i := 0 to Length(randomNumsArray) - 1 do
  begin
    write(randomNumsArray[i], ' ');
  end;

  writeln();
end;

begin
  GenerateRandomNumbers;
end.