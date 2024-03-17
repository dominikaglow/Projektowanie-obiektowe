program GenerateRandomNumbersProgram;

var
  randomNumsArray: array of Integer;

procedure GenerateRandomNumbers;
var
  i: Integer;
begin
  Randomize;

  SetLength(randomNumsArray, 50);
  for i := 0 to 49 do
  begin
    randomNumsArray[i] := Random(101);
    write(randomNumsArray[i], ' ');
  end;
end;

begin
  GenerateRandomNumbers;
end.