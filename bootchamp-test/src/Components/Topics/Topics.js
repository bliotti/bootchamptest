import React, { useState, useEffect } from "react";
import "./Topics.css";
import CreateTopic from "./CreateTopic";
import TopicStateless from "../../Functional_Components/TopicCard/TopicStateless";
import { getAllTopics } from "../../API/topic_api";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getAllTopics().then(res => setTopics(res));
  }, []);
  return (
    <React.Fragment>
      <CreateTopic />

      {topics.map(topic => (
        <TopicStateless topic={topic} key={topic.id} />
      ))}
    </React.Fragment>
  );
};

export default Topics;
