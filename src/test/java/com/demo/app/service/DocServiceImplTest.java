package com.demo.app.service;

import com.demo.app.model.Document;
import com.demo.app.repository.DocRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class DocServiceImplTest {

    @Mock
    private DocRepository docRepository;

    @InjectMocks
    private DocServiceImpl docServiceImpl;

    @Test
    @DisplayName("givenValidInput_whenDocServiceImpl_thenReturnSuccess")
    void givenValidInput_whenDocServiceImpl_thenReturnSuccess() {
        // Arrange
        when(docRepository.findUserDocs(1L)).thenReturn(List.of(new Document(1L, "Doc1")));

        // Act
        List<Document> result = docServiceImpl.findAllDocs(1L);

        // Assert
        assertEquals(1, result.size());
    }

    @Test
    @DisplayName("givenNonExistingId_whenDocServiceImpl_thenThrowNotFoundException")
    void givenNonExistingId_whenDocServiceImpl_thenThrowNotFoundException() {
        // Arrange
        when(docRepository.findUserDocs(1L)).thenThrow(DocumentNotFoundException.class);

        // Act and Assert
        assertThrows(DocumentNotFoundException.class, () -> docServiceImpl.findAllDocs(1L));
    }

    @Test
    @DisplayName("givenNullId_whenDocServiceImpl_thenThrowIllegalArgumentException")
    void givenNullId_whenDocServiceImpl_thenThrowIllegalArgumentException() {
        // Arrange
        when(docRepository.findUserDocs(1L)).thenThrow(IllegalArgumentException.class);

        // Act and Assert
        assertThrows(IllegalArgumentException.class, () -> docServiceImpl.findAllDocs(null));
    }

    @Test
    @DisplayName("givenEmptyList_whenDocServiceImpl_thenReturnEmptyList")
    void givenEmptyList_whenDocServiceImpl_thenReturnEmptyList() {
        // Arrange
        when(docRepository.findUserDocs(1L)).thenReturn(List.of());

        // Act
        List<Document> result = docServiceImpl.findAllDocs(1L);

        // Assert
        assertEquals(0, result.size());
    }

    @Test
    @DisplayName("givenValidInput_whenDocServiceImpl_thenReturnSuccessWithMultipleDocs")
    void givenValidInput_whenDocServiceImpl_thenReturnSuccessWithMultipleDocs() {
        // Arrange
        when(docRepository.findUserDocs(1L)).thenReturn(List.of(new Document(1L, "Doc1"), new Document(2L, "Doc2")));

        // Act
        List<Document> result = docServiceImpl.findAllDocs(1L);

        // Assert
        assertEquals(2, result.size());
    }

    @Test
    @DisplayName("givenInvalidInput_whenDocServiceImpl_thenThrowValidationException")
    void givenInvalidInput_whenDocServiceImpl_thenThrowValidationException() {
        // Arrange
        when(docRepository.findUserDocs(1L)).thenThrow(ValidationException.class);

        // Act and Assert
        assertThrows(ValidationException.class, () -> docServiceImpl.findAllDocs(1L));
    }

}