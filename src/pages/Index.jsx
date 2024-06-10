import React, { useState } from "react";
import { Container, Input, Button, VStack, Textarea, Text, Spinner } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import axios from "axios";
import cheerio from "cheerio";
import pLimit from "p-limit";

const limit = pLimit(5); // 限制并发请求数量

const extractTextFromHTML = (html) => {
  const $ = cheerio.load(html);
  return $("body").text();
};

const crawlWebsite = async (url, visited = new Set()) => {
  if (visited.has(url)) return "";
  visited.add(url);

  try {
    const response = await axios.get(url);
    const html = response.data;
    const text = extractTextFromHTML(html);

    const $ = cheerio.load(html);
    const links = $("a[href]")
      .map((i, link) => $(link).attr("href"))
      .get()
      .filter((href) => href.startsWith("http"));

    const texts = await Promise.all(links.map((link) => limit(() => crawlWebsite(link, visited))));

    return text + texts.join("");
  } catch (error) {
    console.error(`Failed to crawl ${url}:`, error);
    return "";
  }
};

const Index = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCrawl = async () => {
    setLoading(true);
    const text = await crawlWebsite(url);
    setResult(text);
    setLoading(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Website Crawler</Text>
        <Input placeholder="Enter website URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button onClick={handleCrawl} isDisabled={!url || loading}>
          {loading ? <Spinner size="sm" /> : "Crawl"}
        </Button>
        <Textarea value={result} readOnly height="300px" />
      </VStack>
    </Container>
  );
};

export default Index;
