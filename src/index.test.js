const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When grade is 99, then it should be Outstanding', () => {
    // Arrange
    var grade = 99;
    var expected = 'O Outstanding';
    // Act
    var result = gradeClassifier(grade);
    // Assert
    expect(result).toBe(expected);
  });

  it('When grade is 94.99, then it should be Very Good', () => {
      // Arrange
      var grade = 94.99;
      var expected = 'V Very Good';
      // Act
      var result = gradeClassifier(grade);
      // Assert
      expect(result).toBe(expected);
  });

  it('When grade is 85, then it should be Good', () => {
      // Arrange
      var grade = 85;
      var expected = 'G Good';
      // Act
      var result = gradeClassifier(grade);
      // Assert
      expect(result).toBe(expected);
  });

  it('When grade is 82, then it should be Satisfactory', () => {
      // Arrange
      var grade = 82;
      var expected = 'S Satisfactory';
      // Act
      var result = gradeClassifier(grade);
      // Assert
      expect(result).toBe(expected);
  });

  it('When grade is 78, then it should be Needs Improvement', () => {
      // Arrange
      var grade = 78;
      var expected = 'N Needs Improvement';
      // Act
      var result = gradeClassifier(grade);
      // Assert
      expect(result).toBe(expected);
  });

  it('When grade is 69, then it should be Did not meet expectation', () => {
      // Arrange
      var grade = 69;
      var expected = 'D Did not meet expectation';
      // Act
      var result = gradeClassifier(grade);
      // Assert
      expect(result).toBe(expected);
  });
});