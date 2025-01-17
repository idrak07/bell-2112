package com.genuinecoder.springserver.repository;

import com.genuinecoder.springserver.domain.QuizAssignee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizAssigneeRepository extends JpaRepository<QuizAssignee, Long> {
    QuizAssignee findByQuizIdAndUserId(Long quizId, Long userId);

    List<QuizAssignee> findAllByUserId(Long userId);

    List<QuizAssignee> findAllByQuizId(Long quizId);
}
