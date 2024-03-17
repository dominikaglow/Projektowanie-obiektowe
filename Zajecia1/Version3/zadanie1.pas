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

procedure DisplayNumbers;
var
  i: Integer;
begin
  for i := 0 to Length(randomNumsArray) - 1 do
    write(randomNumsArray[i], ' ');
  writeln();
end;

procedure GenerateRandomNumbers(fromNum, toNum, howMany: Integer);
var
  i: Integer;
begin
  Randomize;

  if fromNum > toNum then
  begin
    writeln('fromNum must be less than or equal to toNum.');
    Exit;
  end;

  if howMany < 0 then
  begin
    writeln('howMany must be greater than 0');
    Exit;
  end;

  SetLength(randomNumsArray, howMany);
  write('Generated numbers: ');
  for i := 0 to howMany - 1 do
  begin
    randomNumsArray[i] := Random(toNum - fromNum + 1) + fromNum;
  end;

  DisplayNumbers;

  writeln();
  
  SortNumbers;
  write('Sorted numbers: ');
  DisplayNumbers;

  writeln();
end;

begin
  GenerateRandomNumbers(1, 100, 50);
end.